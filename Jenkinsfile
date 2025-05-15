pipeline {
    agent {
        label 'portfolio-node'
    }

    stages {
        stage('Checkout source code') {
            steps {
                git branch: 'main', url: 'https://github.com/ShavB/portfolio.git'
                echo 'git checkout task is completed--------------------------------------->'
            }
        }

        stage('bulding the docker image') {
            steps {
                sh 'docker build -t shavb-portfolio:latest .'
            }
        }

        stage('Running the docker container...') {
            steps {
                sh 'docker run -d -p 8080:80 shavb-portfolio:latest '
            }
        }
    }
}
