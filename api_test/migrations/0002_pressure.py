# Generated by Django 2.0.2 on 2021-07-17 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_test', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pressure',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('address', models.CharField(blank=True, max_length=1024, null=True, verbose_name='地址')),
                ('data', models.CharField(blank=True, max_length=1024, null=True, verbose_name='请求体')),
                ('header', models.CharField(blank=True, max_length=1024, null=True, verbose_name='请求头')),
            ],
            options={
                'verbose_name': '压测',
                'verbose_name_plural': '压测记录',
            },
        ),
    ]