import Tagline from "./src/components/client/index";

export default {
  footer: (
    <footer>
      <small>
        <Tagline />
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
};
