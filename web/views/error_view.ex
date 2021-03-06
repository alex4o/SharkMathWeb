defmodule M4A.ErrorView do
  use M4A.Web, :view

  import M4A.ErrorHelpers

  def render("404.html", _assigns) do
    "Page not found"
  end

  def render("500.html", %{errors: errors}) do
   "Server internal error"
  end

  def render("error.json", %{changeset: changeset}) do
    # When encoded, the changeset returns its errors
    # as a JSON object. So we just pass it forward.
    %{errors: translate_errors(changeset)}
  end

  # In case no render clause matches or no
  # template is found, let's render it as 500
  def template_not_found(_template, assigns) do
    render "500.html", assigns
  end
end
