FROM mcr.microsoft.com/mssql/server:2022-latest

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=abc123!!@

COPY ./sqlserverentrypoint.sh /.
COPY ./sqlserversetup.sql /.

ENTRYPOINT [ "/bin/bash", "sqlserverentrypoint.sh" ]

CMD [ "/opt/mssql/bin/sqlservr" ]