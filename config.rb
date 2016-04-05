###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

activate :external_pipeline,
   name: :gulp,
   command: build? ? 'npm run build' : 'npm start',
   source: '.tmp/dist'

set :layout, 'base'

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  activate :relative_assets

  ignore '*.map' # Remove .map files from build
end

# Ignore stylesheets & JS as they are handled by external pipeline
ignore /stylesheets\/(?!.*\.css)/
ignore /javascripts\/(?!app\.bundle\.js)/

