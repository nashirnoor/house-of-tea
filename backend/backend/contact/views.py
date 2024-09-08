from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.mail import send_mail

@api_view(['POST'])
def send_review(request):
    send_mail(
        # subject
        'Review from '+request.data['name'],
        #body
        f'Name: {request.data["name"]} \n Email: {request.data["email"]}\n Rating: {request.data["rating"]}\n Review: {request.data["review"]}',
        #recipient 
        from_email=request.data["email"],
        recipient_list=['ihsanurahman8055@gmail.com'],
            
        )
    return JsonResponse({'message':'response has been sended'})