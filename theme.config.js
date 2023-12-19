import Tagline from "./app/components/client/footer-tagline";

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
