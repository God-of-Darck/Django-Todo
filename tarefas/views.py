from django.shortcuts import render
from .models import Tarefas
# Create your views here.

def listaTarefas(request):
    tarefas = Tarefas.objects.all().order_by('-created_at')
    return render (request, 'tarefas/list.html', {'tarefas':tarefas})
