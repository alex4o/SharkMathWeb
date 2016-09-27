use Mix.Config
import String
# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :M4A, M4A.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  cache_static_lookup: false,
  watchers: [
    npm: ["start", cd: Path.expand("../", __DIR__)]
  ]

# Watch static and templates for browser reloading.
config :M4A, M4A.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Configure your database
config :M4A, M4A.Repo,
  adapter: Ecto.Adapters.Postgres,
  hostname: "fizzy-cherry.db.elephantsql.com",
  username: "soganiwi",
  password: "BBkfbtPaqCzwapvHumAnShRxJiwNd1de",
  database: "soganiwi",
  pool_size: 1 # The amount of database connections in the pool

config :openmaize_jwt,
  signing_key: String.duplicate("qwertyui", 8)