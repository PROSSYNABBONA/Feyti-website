# Use the official PHP-Apache image
FROM php:8.2-apache

# Copy all website files to the Apache web root
COPY . /var/www/html/

# Enable Apache mod_rewrite if needed (optional)
RUN a2enmod rewrite

# Expose port 80 (default for web)
EXPOSE 80