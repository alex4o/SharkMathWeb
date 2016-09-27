defmodule M4A.User do
  use M4A.Web, :model

  alias M4A.OpenmaizeEcto

  schema "users" do
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email])
    |> validate_required([:email])
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
  end

  def auth_changeset(model, params) do
    model
    |> changeset(params)
    |> OpenmaizeEcto.add_password_hash(params)
  end

end
