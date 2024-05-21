# Stage 1: Build the application
FROM maven:3.9-sapmachine-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/APIGateway.jar app.jar
EXPOSE 8080
ENV SERVER_PORT=8080
ENV EUREKA_HOST=EurekaRegistry
ENTRYPOINT ["java", "-jar", "app.jar"]