declare module 'json-body' {
  import { Stream } from 'stream';
  function jsonBody (stream: Stream, cb: Function): void;

  namespace jsonBody {
    function jsonBody (stream: Stream, cb: Function): void;
  }

  export = jsonBody;
}
