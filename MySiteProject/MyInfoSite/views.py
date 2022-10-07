from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView


def timer(request):
    email = request.GET.get("email")
    name = request.GET.get("name")
    phone = request.GET.get("phone")
    conxt = {"name": "Безымянный пользователь"}
    if name:
        conxt = {"name": name}
    return render(request, "timer.html", context=conxt)


def set_data(request):

    return

