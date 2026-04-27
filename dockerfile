FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 3005

CMD ["python", "app.py"]