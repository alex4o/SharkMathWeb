defmodule M4A.UserView do
	use M4A.Web, :view


	def render("index.json", %{users: users}) do
		%{data: render_many(users, M4A.UserView, "user.json")}
	end

	def render("show.json", %{user: user}) do
		%{data: render_one(user, M4A.UserView, "user.json")}
	end

	def render("info.json", %{info: message}) do
		%{info: %{detail: message}}
	end

	def render("user.json", %{user: user}) do
		%{id: user.id, email: user.email}
	end
end
