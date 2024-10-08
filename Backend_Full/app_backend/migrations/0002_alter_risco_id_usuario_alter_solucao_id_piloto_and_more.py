# Generated by Django 5.0.6 on 2024-08-28 23:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='risco',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_backend.usuario', verbose_name='Usuário'),
        ),
        migrations.AlterField(
            model_name='solucao',
            name='id_piloto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_backend.piloto'),
        ),
        migrations.AlterField(
            model_name='solucao',
            name='id_risco',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_backend.risco'),
        ),
    ]
