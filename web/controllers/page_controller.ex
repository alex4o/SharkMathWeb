defmodule M4A.PageController do
  use M4A.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
