package middleware

import (
	"github.com/Domains18/generate_cv/pkg/jwt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func JWTAuth() gin.HandlerFunc {
	return JWT(jwt.AccessTokenType)
}

func JWTRefresh() gin.HandlerFunc {
	return JWT(jwt.RefreshTokenType)
}

func JWT(tokenType string) gin.HandlerFunc{
	return func(c *gin.Context){
		token := c.GetHeader("Authorization")
		if token == ""{
			c.JSON(http.StatusUnauthorized, nil)
			c.Abort()
			return
		}
		payload, err := jwt.ValidateToken(token)
		if err != nil || payload == nil || payload["type"] != tokenType {
			c.JSON(http.StatusUnauthorized, nil)
			c.Abort()
			return
		}
		c.Set("userId", payload["id"])
		c.Next()
	}
}