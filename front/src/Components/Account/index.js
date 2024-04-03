import Button from '../../Utils/button'
import './style.scss'

export const Account = () => {
    return (
        <div className='account'>
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button content="View transaction" />
            </div>
        </div>
    )
}

export const AccountWrapper = () => {
    return (
        <div className="user-account bg-dark">
            {[...Array(3)].map((_, index) => (
                <Account key={index} />
            ))}
        </div>
    )
}