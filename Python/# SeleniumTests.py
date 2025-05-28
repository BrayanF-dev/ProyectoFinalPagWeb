# SeleniumTests.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time
import os

# Configuración del WebDriver (Chrome) con webdriver-manager
chrome_options = Options()
chrome_options.add_argument("--start-maximized")
service = Service(ChromeDriverManager().install())

driver = webdriver.Chrome(service=service, options=chrome_options)

# URL base de tus archivos HTML en local
base_path = r'C:\Users\crsitian\Downloads\proyecto\Tienda_VideojuegosPF\html'
base_url = 'file:///' + base_path.replace('\\', '/')

try:
    # 1. Abrir index.html local
    driver.get(f"{base_url}/index.html")

    # 2. Ir a login y loguear
    time.slepp(2)
    driver.find_element(By.LINK_TEXT, 'Login').click()
    time.sleep(1)
    driver.find_element(By.ID, 'username').send_keys('cris')
    time.sleep(2)
    driver.find_element(By.ID, 'password').send_keys('1234')
    time.sleep(2)
    driver.find_element(By.ID, 'loginButton').click()

    # 3. Esperar y regresar al index
    time.sleep(2)

    # 4. Ir a catálogo, seleccionar primer juego
    driver.find_element(By.LINK_TEXT, 'Catálogo').click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, '.addToCart').click()

    # 5. Manejar alerta después de 5s
    time.sleep(5)
    Alert(driver).accept()

    # 6. Ir a carrito, vaciar
    driver.find_element(By.LINK_TEXT, 'Carrito').click()
    time.sleep(2)
    driver.find_element(By.ID, 'vaciar').click()
    time.sleep(4)

    # 7. Volver a catálogo y repetir selección
    driver.find_element(By.LINK_TEXT, 'Catálogo').click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, '.addToCart').click()
    time.sleep(5)
    Alert(driver).accept()

    # 8. Carrito y finalizar compra
    driver.find_element(By.LINK_TEXT, 'Carrito').click()
    time.sleep(2)
    driver.find_element(By.ID, 'finalizar').click()
    time.sleep(5)
    Alert(driver).accept()

    # 9. Regresar e ir a contacto
    driver.find_element(By.XPATH, "//button[text()='Regresar']").click()
    time.sleep(2)
    driver.find_element(By.LINK_TEXT, 'Contacto').click()
    time.sleep(2)

    # 10. Llenar formulario de contacto
    driver.find_element(By.ID, 'nombre').send_keys('Andres')
    time.sleep(3)
    driver.find_element(By.ID, 'correo').send_keys('Andres@example.com')
    time.sleep(3)
    driver.find_element(By.ID, 'mensaje').send_keys('La pagina esta muy bonita')
    time.sleep(3)
    driver.find_element(By.CSS_SELECTOR, "form button[type='submit']").click()

    # 11. Manejar alerta de contacto
    time.sleep(5)
    Alert(driver).accept()

finally:
    driver.quit()
