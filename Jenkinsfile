pipeline {
    agent any

    environment {
        IMAGE_NAME = "fwl-admintool-build"
        COMPOSE_FILE = "docker/docker-compose.prod.yml"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Stop containers') {
            steps {
                sh """
                    docker compose -f ${COMPOSE_FILE} down || true
                """
            }
        }

        stage('Build Docker image') {
            steps {
                sh """
                    docker build -f ./docker/Dockerfile.build -t ${IMAGE_NAME} .
                """
            }
        }

        stage('Start containers') {
            steps {
                sh """
                    docker compose -f ${COMPOSE_FILE} up --build -d
                """
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
        failure {
            echo "Build failed"
        }
    }
}