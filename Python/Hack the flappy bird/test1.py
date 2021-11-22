import pygame
from random import randint
pygame.init()
display = pygame.display.set_mode((320, 568))
text = pygame.font.Font(None, 50)
bg = pygame.image.load('bg.png')
bird = pygame.image.load('bird.png')
pole_x = 320
bird_x = 20
pole_gap = 100
pole_width = 70
top_pole_height = randint(100, 400)
bird_y = top_pole_height + 20
pole_color = (220, 85, 57)
score = 0
clock = pygame.time.Clock()
while True:
    pygame.event.get()
    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP]:
        bird_y = bird_y - 3
    elif keys[pygame.K_DOWN]:
        bird_y = bird_y + 6
    pole_x = pole_x - 2
    display.blit(bg, (0, 0))
    display.blit(bird, (bird_x, bird_y))
    if pole_x <= -pole_width:
        pole_x = 320
        top_pole_height = randint(50, 400)
        bird_y = top_pole_height + 20
        score = score + 20
    pygame.draw.rect(display, pole_color, (pole_x, 0, pole_width, top_pole_height))
    pygame.draw.rect(display, pole_color, (pole_x,top_pole_height + pole_gap, pole_width, 568))
    # collision
    if pole_x <= bird_x + 50 and bird_x <= pole_x + pole_width:
        if bird_y <= top_pole_height or bird_y + 50 >= top_pole_height + pole_gap:
            score = score - 5
            print('Collision !! Bye Bye bird baby!!!', score)
    score_text = text.render(f'Score: {score}', True, (255, 255, 255))
    display.blit(score_text, (0, 0))
    pygame.display.update()
    clock.tick(60)