# encoding: utf-8
require_relative 'lib/redmine_jstoolbar_ext_buttons_hook_listener'

Redmine::Plugin.register :redmine_jstoolbar_ext_buttons do
  name 'Redmine jsToolbar Buttons Extension'
  author 'Thomas Leishman'
  description 'The Redmine JS Toolbar Buttons Extension adds an image attachments submenu to the jsToolbar.'
  version '0.2.1'
  url 'https://github.com/stuckas/redmine_jstoolbar_ext_buttons'
  author_url 'https://github.com/tleish'
  requires_redmine_plugin :redmine_jstoolbar_ext, :version_or_higher => '0.1.0'
end
