import re

# Create your views here.


def rre_nombre(nombre):
    res = re.match(r'[a-zA-ZÀ-ÿ\s]{3,40}$', nombre)
    if res:
        return True
    return False


def re_nombre(nombre): return True if re.match(
    r'[a-zA-ZÀ-ÿ\s]{3,40}$', nombre) else False


def re_correo(correo): return True if re.match(
    r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', correo) else False


def re_mensaje(mensaje): return True if len(mensaje) >= 20 else False


# correo = "gorda@gmail"

# print(re_correo(correo))

mensaje = "Hola las cosas solo"

print(re_mensaje(mensaje))
print(len(mensaje))
