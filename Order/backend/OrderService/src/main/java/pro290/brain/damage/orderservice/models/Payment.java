/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:43 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import java.time.LocalDate;

public class Payment {
    public String ccNumber;
    public int ccv;
    public LocalDate expirationDate;

    public Payment() {
    }

    public Payment(String ccNumber, int ccv, LocalDate expirationDate) {
        this.ccNumber = ccNumber;
        this.ccv = ccv;
        this.expirationDate = expirationDate;
    }

    public String getCcNumber() {
        return ccNumber;
    }

    public void setCcNumber(String ccNumber) {
        this.ccNumber = ccNumber;
    }

    public int getCcv() {
        return ccv;
    }

    public void setCcv(int ccv) {
        this.ccv = ccv;
    }

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }
}
