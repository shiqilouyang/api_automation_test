# Generated by Django 2.0.2 on 2021-07-17 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_test', '0002_pressure'),
    ]

    operations = [
        migrations.AddField(
            model_name='pressure',
            name='aux_id',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='进程ID'),
        ),
    ]
