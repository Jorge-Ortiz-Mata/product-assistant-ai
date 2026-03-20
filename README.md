## Activar applicacion

Cambiar el estatus del proyecti a True: https://www.npoint.io/docs/41dc8576d3cf632cf7e6

## Construir imagen backend

- Construir

```bash
docker build --platform linux/amd64 -t jorgeortizgmail/product-assistant-backend:latest .
```

- Subir 

```bash
docker push jorgeortizgmail/product-assistant-backend:latest
```



## Links

- Backend

https://product-assistant-backend-latest.onrender.com