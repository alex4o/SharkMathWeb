defmodule M4A do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/M4A.html
  # for more information on OTP M4As
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the M4A starts
      supervisor(M4A.Endpoint, []),
      # Start the Ecto repository
      worker(M4A.Repo, []),
      # Here you could define other workers and supervisors as children
      # worker(M4A.Worker, [arg1, arg2, arg3]),
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: M4A.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the M4A is updated.
  def config_change(changed, _new, removed) do
    M4A.Endpoint.config_change(changed, removed)
    :ok
  end
end
