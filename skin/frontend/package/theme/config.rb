require 'compass/import-once/activate'

#--------------------
# Configuration
#--------------------

http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "images"
javascripts_dir = "js"
environment = :production
output_style = :compact
line_comments = false

/* use LF line separator */
sass_options = {
    :unix_newlines => true
}

#--------------------

# Note
# output_style = :expanded or :nested or :compact or :compressed
# environment = :production or :development
