
FROM composer:latest
FROM php:8.1-fpm
 
RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
   && docker-php-ext-install intl opcache pdo pdo_mysql \
   && pecl install apcu \
   && docker-php-ext-enable apcu \
   && docker-php-ext-configure zip \
   && docker-php-ext-install zip

WORKDIR /var/www/project

#RUN curl -sS https://getcomposer.org/installer | php -- ---install-dir=/usr/local/bin --filename=composer
# copy the Composer PHAR from the Composer image into the PHP image
COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony
# show that both Composer and PHP run as expected
RUN composer --version && php -v