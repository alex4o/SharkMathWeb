ExUnit.start

# Create the database, run migrations, and start the test transaction.
Ecto.Adapters.SQL.Sandbox.mode(WebpackExample.Repo, :manual)
