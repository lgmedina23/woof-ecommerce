"""empty message

Revision ID: eb593d3d5fdd
Revises: 145ed1cf8f93
Create Date: 2023-11-21 11:27:31.304091

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eb593d3d5fdd'
down_revision = '145ed1cf8f93'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('stripe_price', sa.String(length=50), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.drop_column('stripe_price')

    # ### end Alembic commands ###
