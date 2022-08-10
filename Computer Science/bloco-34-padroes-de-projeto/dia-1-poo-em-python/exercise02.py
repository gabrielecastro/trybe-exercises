# Defina uma classe Estatistica que calcule média, mediana e moda de uma lista de números
 
import statistics
 
 
class Estatistica:
   def __init__(self):
       self.media = 0
       self.mediana = 0
       self.moda = 0
 
   @classmethod
   def calcula_media(self, lista):
       self.media = sum(lista) / len(lista)
       return self.media
 
   @classmethod
   def calcula_mediana(self, lista):
       self.mediana = statistics.median(lista)
       return self.mediana
 
   @classmethod
   def calcula_moda(self, lista):
       self.moda = statistics.mode(lista)
       return self.moda
      