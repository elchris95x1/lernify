import PageHeaders from "@/components/PageHeaders";

export default function PricingPage(){
    return(
        <>
            <PageHeaders
            h1Text={'Check out our pricing'}
            h2Text={'Our pricing is very simple'} />
            <div class="pricing">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <h5 class="card-title text-muted text-uppercase text-center">Basic</h5>
                                <h6 class="card-price text-center">$100<span class="period">/month</span></h6>
                                <hr/>
                                <ul class="fa-ul">
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>100 Credits Per Month</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Transactions</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Setup</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Support via Email</li>
                                </ul>
                                <a href="#" class="btn btn-block btn-primary text-uppercase">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                                <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                                <h6 class="card-price text-center">$1000<span class="period">/month</span></h6>
                                <hr/>
                                <ul class="fa-ul">
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>1000 Credits Per Month</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Transactions</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Setup</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Support via Email</li>
                                </ul>
                                <a href="#" class="btn btn-block btn-primary text-uppercase">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                                <h6 class="card-price text-center">$1000<span class="period">/month</span></h6>
                                <hr/>
                                <ul class="fa-ul">
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Pay As You Go</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Transactions</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Setup</li>
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Support via Email</li>
                                </ul>
                                <a href="#" class="btn btn-block btn-primary text-uppercase">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}