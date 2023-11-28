package main

import (
	"fmt"
	"net/http"

	"github.com/Domains18/generate_cv/pkg/config"
	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadConfig()

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "server is running")
	})
	router.Run(fmt.Sprintf("localhost:%d", config.GetConfig().HttpPort))
}
