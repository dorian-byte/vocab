from django.db import models

# Create your models here.


class Word(models.Model):
    word = models.CharField(max_length=100)
    definition = models.CharField(max_length=1000)
    img_url = models.CharField(max_length=1000, default="")
    # word_type = models.CharField(max_length=100)
    # synonyms = models.CharField(max_length=1000)
    # antonyms = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.word


class Sentence(models.Model):
    sentence = models.CharField(max_length=1000)
    words = models.ManyToManyField(Word, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.sentence


class User(models.Model):
    saved_words = models.ManyToManyField(Word, blank=True)
    saved_sentences = models.ManyToManyField(Sentence, blank=True)
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=1000)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
