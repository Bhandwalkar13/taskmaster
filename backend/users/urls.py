from django.urls import path
from .views import login_view, logout_view, current_user, get_csrf_token

urlpatterns = [
    path('csrf/', get_csrf_token, name='csrf'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('current-user/', current_user, name='current-user'),
]