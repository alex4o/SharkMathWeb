defmodule M4A.ErrorHelpers do
	@moduledoc """
	Conveniences for translating and building error messages.
	"""
	import Ecto

	def translate_error({msg, opts}) do
		String.replace(msg, "%{count}", to_string(opts[:count]))
	end
	def translate_error(msg), do: msg

	def translate_errors(changeset) do
		Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
	end

end

