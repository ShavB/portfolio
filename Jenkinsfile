@Library ('Shared') _
pipeline {
    agent {
        label 'portfolio-node'
    }

    environment {
        FRONTEND_ENV = credentials('frontend_env')
        BACKEND_ENV = credentials('backend_env')
    }

    stages {
        stage('Checkout source code') {
            steps {
                script {
                    git_clone('https://github.com/ShavB/portfolio.git', 'main')
                }
                echo '✅ git checkout task is completed--------------------------------------->'
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    // Write frontend .env file dynamically before build
                    writeFile file: '.env.production', text: readFile(FRONTEND_ENV)

                    // Build frontend Docker image (context = current directory)
                    docker_build('portfolio-frontend', 'latest', '.')
                }
            }
        }

        stage('bulding backend image') {
            steps {
                script {
                    writeFile file: '.env', text: readFile(BACKEND_ENV)
                    docker_build('portfolio-backend', 'latest', 'backend')
                }
                echo 'docker build completed!!!!!!!!!!!!!!!!!!!!!!!!!!!'
            }
        }

        stage('Pushing to Dockerhub') {
            steps {
                echo '🛠 ️This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
                script {
                    docker_creds('portfolio-frontend', 'latest', 'shavbb')
                    docker_creds('portfolio-backend', 'latest', 'shavbb')
                }
                echo 'This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d'
            }
        }
    }
}
