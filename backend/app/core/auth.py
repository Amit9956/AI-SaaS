from jose import JWTError, jwt
from fastapi import Depends, Header, HTTPException
from sqlalchemy.orm import Session

from app.config import SECRET_KEY, ALGORITHM
from app.db.session import get_db
from app.models.user import User


def get_current_user(
    authorization: str = Header(None),
    db: Session = Depends(get_db)
):
    print("=" * 50)
    print("Authorization:", authorization)

    if authorization is None:
        raise HTTPException(
            status_code=401,
            detail="Authorization header missing"
        )

    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Invalid authorization header"
        )

    token = authorization.replace("Bearer ", "")
    
    print("TOKEN RECEIVED:", token)
    print("TOKEN:", token)
    print("SECRET_KEY:", SECRET_KEY)
    print("ALGORITHM:", ALGORITHM)

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        print("PAYLOAD:", payload)

        email = payload.get("sub")

        print("EMAIL:", email)

        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

    except JWTError as e:
        print("JWT ERROR:", e)
        raise HTTPException(
            status_code=401,
            detail="Token expired or invalid"
        )

    user = db.query(User).filter(
        User.email == email
    ).first()

    print("USER:", user)

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user