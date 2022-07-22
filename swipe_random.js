function randomInt(...args) {
      if (args.length === 1) {
        const [n] = args;
        return Math.ceil(Math.random() * n);
      }

      if (args.length === 2) {
        const [start, end] = args;

        if (start > end) throw Error("시작값이 끝값보다 큼");

        return Math.ceil(Math.random() * (end - start)) + start;
      }
    }

    function random(...args) {
      if (args.length === 1) {
        const [n] = args;
        return Math.random() * n;
      }

      if (args.length === 2) {
        const [start, end] = args;

        if (start > end) throw Error("시작값이 끝값보다 큼");

        return Math.random() * (end - start) + start;
      }
    }

    const range = function (n, m) {
      if (arguments.length === 1)
        return Array.from({ length: n }).map((_, i) => i);

      if (arguments.length === 2) {
        if (n === m) return [n];
        else if (n < m) {
          return Array.from({ length: m - n + 1 }).map((_, i) => i + n);
        } else {
          return Array.from({ length: n - m + 1 }).map(
            (_, i) => m - i + (n - m)
          );
        }
      }
    };

    function normalize(n) {
      return n < 0 ? -1 : n > 0 ? 1 : 0;
    }

    function clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }

    function between(v, min, max) {
      return min <= v && v <= max;
    }

    const delay = (n) => new Promise((r) => setTimeout(r, n));