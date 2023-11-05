package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)




func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "server is running")
	});
	router.Run("localhost:5000")
}
