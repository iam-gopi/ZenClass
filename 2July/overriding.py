class Fruit:
    def get_taste(self):
        print("Parent Taste")
        
class Apple(Fruit):
    def get_taste(self):
        Fruit.get_taste(self)
        print("child Taste")
        
        
l = Apple()
l.get_taste()
