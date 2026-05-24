from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def how_it_works(request):
    return render(request, 'how-it-works.html')

def challenges(request):
    return render(request, 'challenges.html')

def faq(request):
    return render(request, 'faq.html')

def affiliate(request):
    return render(request, 'affiliate.html')

def login_view(request):
    if request.user.is_authenticated:
        return redirect('index')
    
    if request.method == 'POST':
        identifier = request.POST.get('identifier', '').strip()
        password = request.POST.get('password', '')
        
        if not identifier or not password:
            messages.error(request, "Please enter all fields.")
            return render(request, 'auth/login.html')
        
        # Try to get user by email first
        user = None
        if '@' in identifier:
            try:
                user = User.objects.get(email=identifier)
            except User.DoesNotExist:
                pass
        
        # If not found by email, try by username
        if user is None:
            try:
                user = User.objects.get(username=identifier)
            except User.DoesNotExist:
                pass
        
        if user is not None:
            # Authenticate using the username
            authenticated_user = authenticate(request, username=user.username, password=password)
            if authenticated_user is not None:
                login(request, authenticated_user)
                messages.success(request, f"Welcome back, {authenticated_user.username}!")
                next_url = request.GET.get('next')
                return redirect(next_url if next_url else 'index')
        
        messages.error(request, "Invalid username/email or password.")
        return render(request, 'auth/login.html', {'identifier': identifier})
    
    return render(request, 'auth/login.html')

def signup_view(request):
    if request.user.is_authenticated:
        return redirect('index')
    
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        confirm_password = request.POST.get('confirm_password', '')
        terms = request.POST.get('terms')
        
        context = {
            'username': username,
            'email': email
        }
        
        if not username or not email or not password or not confirm_password:
            messages.error(request, "Please fill in all fields.")
            return render(request, 'auth/signup.html', context)
        
        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return render(request, 'auth/signup.html', context)
        
        if len(password) < 6:
            messages.error(request, "Password must be at least 6 characters long.")
            return render(request, 'auth/signup.html', context)
        
        if not terms:
            messages.error(request, "You must agree to the Terms and Conditions.")
            return render(request, 'auth/signup.html', context)
        
        # Check username
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username is already taken.")
            return render(request, 'auth/signup.html', context)
        
        # Check email
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email is already registered.")
            return render(request, 'auth/signup.html', context)
        
        try:
            # Create user
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            
            # Automatically log in the user
            authenticated_user = authenticate(request, username=username, password=password)
            if authenticated_user is not None:
                login(request, authenticated_user)
                messages.success(request, "Account created successfully! Welcome to Lord Funded.")
                return redirect('index')
            else:
                messages.success(request, "Registration successful. Please log in.")
                return redirect('login')
        except Exception as e:
            messages.error(request, f"An error occurred: {str(e)}")
            return render(request, 'auth/signup.html', context)
        
    return render(request, 'auth/signup.html')

def logout_view(request):
    logout(request)
    messages.success(request, "Logged out successfully.")
    return redirect('index')


