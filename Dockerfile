FROM nginx:latest

RUN apt-get update && \
    apt-get install -y curl && \
    curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html

EXPOSE 2192

ENTRYPOINT ["kubectl"]
CMD ["--help"]
