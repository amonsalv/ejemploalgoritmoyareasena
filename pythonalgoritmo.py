import math

def calculate_area_volume():
    print("Figuras geométricas disponibles:")
    print("1. Cuadrado")
    print("2. Rectángulo")
    print("3. Círculo")
    print("4. Triángulo")
    print("5. Cubo")
    print("6. Prisma rectangular")

    figura = int(input("Seleccione una figura (1-6): "))

    if figura == 1:  # Cuadrado
        lado = float(input("Ingrese el lado del cuadrado: "))
        area = lado ** 2
        volumen = None
        print(f"El área del cuadrado es: {area:.2f}")
        print("El cuadrado no tiene volumen.")

    elif figura == 2:  # Rectángulo
        base = float(input("Ingrese la base del rectángulo: "))
        altura = float(input("Ingrese la altura del rectángulo: "))
        area = base * altura
        volumen = None
        print(f"El área del rectángulo es: {area:.2f}")
        print("El rectángulo no tiene volumen.")

    elif figura == 3:  # Círculo
        radio = float(input("Ingrese el radio del círculo: "))
        area = math.pi * radio ** 2
        volumen = None
        print(f"El área del círculo es: {area:.2f}")
        print("El círculo no tiene volumen.")

    elif figura == 4:  # Triángulo
        base = float(input("Ingrese la base del triángulo: "))
        altura = float(input("Ingrese la altura del triángulo: "))
        area = 0.5 * base * altura
        volumen = None
        print(f"El área del triángulo es: {area:.2f}")
        print("El triángulo no tiene volumen.")

    elif figura == 5:  # Cubo
        lado = float(input("Ingrese el lado del cubo: "))
        area = 6 * lado ** 2
        volumen = lado ** 3
        print(f"El área del cubo es: {area:.2f}")
        print(f"El volumen del cubo es: {volumen:.2f}")

    elif figura == 6:  # Prisma rectangular
        base = float(input("Ingrese la base del prisma rectangular: "))
        altura = float(input("Ingrese la altura del prisma rectangular: "))
        profundidad = float(input("Ingrese la profundidad del prisma rectangular: "))
        area = 2 * (base * altura + base * profundidad + altura * profundidad)
        volumen = base * altura * profundidad
        print(f"El área del prisma rectangular es: {area:.2f}")
        print(f"El volumen del prisma rectangular es: {volumen:.2f}")

    else:
        print("Opción no válida.")
        return

    repetir = input("¿Desea realizar otro cálculo? (s/n): ")
    if repetir.lower() == "s":
        calculate_area_volume()

if __name__ == "__main__":
    calculate_area_volume()