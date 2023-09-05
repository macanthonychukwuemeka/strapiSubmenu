import { useGlobalContext } from "./Context"
import sublinks from "./data"

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className='nav-links'>
      {" "}
      {sublinks.map((item) => {
        const { pageId, page } = item
        return (
          // i will be using button for this, instead of NavLinks, since they will be clickable
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}>
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
