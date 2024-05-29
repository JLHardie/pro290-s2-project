FROM maven:3.9-sapmachine-17 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -DskipTests

FROM tomcat:11.0.0-jdk17
COPY --from=build /home/app/target/PRO290TicketServiceAPI.war /usr/local/tomcat/webapps/ROOT.war

ENV MONGO_HOST=InventoryServiceMongoDB
ENV MONGO_PORT=27017
ENV SERVER_PORT=8080
ENV SQL_HOST=RepairStoreSQLDB
ENV SQL_PORT=1433
ENV EUREKA_HOST=EurekaRegistry