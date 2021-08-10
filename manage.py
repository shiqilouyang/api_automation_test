#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api_automation_test.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


# gunicorn --worker-class=gevent --worker-connections=1000 -w 4 api_automation_test.wsgi -b 0.0.0.0:8000 -c manage.py

# ./views/register.vue' in '/root/api_automation_test/frontend/sr