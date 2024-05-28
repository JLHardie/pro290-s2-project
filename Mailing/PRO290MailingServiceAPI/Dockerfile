FROM maven:3.9-sapmachine-17 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM tomcat:11.0.0-jdk17
COPY --from=build /home/app/target/PRO290MailingServiceAPI-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

ENV SERVER_PORT=8080
ENV EUREKA_HOST=TestingEureka

ENV SPRING_RABBITMQ_HOST=RabbitMQTesting