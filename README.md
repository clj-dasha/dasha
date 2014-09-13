# dasha

Group chat: https://gitter.im/sherpc/dasha?utm_source=badge&utm_medium=badge&utm_campaign=share-badge

## Usage

FIXME: explanation

    $ java -jar dasha-0.1.0-standalone.jar [args]

## Installation

```
upstream dasha {
  server <dasha-host>:<dasha-port>;
  keepalive 90;
}
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}
server {
  listen 10005;
  location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_pass http://dasha;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
  }
}
```

Как обычно домой пришел и за 5 мин сделал :(

## Options

FIXME: listing of options this app accepts.

## Examples

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
